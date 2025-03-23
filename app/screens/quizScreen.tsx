import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, TextInput, ScrollView, Alert } from "react-native";

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export default function QuizScreen() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("10");
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const numQuestions = Number(amount);

    if (numQuestions < 10 || numQuestions > 30) {
      Alert.alert("Error", "Please enter a number between 10 and 30.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=${numQuestions}&type=multiple`);
      const data = await response.json();
      setQuestions(data.results);
      setUserAnswers({});
      setShowResults(false);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch questions.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (index: number, answer: string) => {
    setUserAnswers((prev) => ({ ...prev, [index]: answer }));
  };

  const calculateScore = () => {
    return questions.reduce((score, q, i) => (userAnswers[i] === q.correct_answer ? score + 1 : score), 0);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20, flexGrow: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>Trivia Quiz</Text>

      {!showResults ? (
        <>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              marginBottom: 20,
              fontSize: 16,
            }}
            placeholder="Enter number of questions (10-30)"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />

          <TouchableOpacity
            onPress={fetchQuestions}
            style={{
              backgroundColor: "blue",
              padding: 15,
              alignItems: "center",
              borderRadius: 5,
              marginBottom: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Generate Questions</Text>
          </TouchableOpacity>

          {loading ? (
            <ActivityIndicator size="large" color="blue" />
          ) : (
            questions.map((q, index) => {
              const options = [...q.incorrect_answers, q.correct_answer].sort();

              return (
                <View key={index} style={{ marginBottom: 20 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {index + 1}. {q.question}
                  </Text>

                  {options.map((option, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() => handleAnswer(index, option)}
                      style={{
                        backgroundColor: userAnswers[index] === option ? "green" : "lightgray",
                        padding: 10,
                        marginVertical: 5,
                        borderRadius: 5,
                      }}
                    >
                      <Text style={{ fontSize: 16 }}>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              );
            })
          )}

          {questions.length > 0 && (
            <TouchableOpacity
              onPress={() => setShowResults(true)}
              style={{
                backgroundColor: "red",
                padding: 15,
                alignItems: "center",
                borderRadius: 5,
                marginTop: 20,
              }}
            >
              <Text style={{ color: "white", fontSize: 16 }}>Submit Answers</Text>
            </TouchableOpacity>
          )}
        </>
      ) : (
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
            Your Score: {calculateScore()} / {questions.length}
          </Text>
          <TouchableOpacity
            onPress={fetchQuestions}
            style={{
              backgroundColor: "blue",
              padding: 15,
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Play Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}
