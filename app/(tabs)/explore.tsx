import { Image, Platform, View, Text, ScrollView } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import { directs } from '../utils/paths';
import { router } from 'expo-router';

export default function TabTwoScreen() {
  
  return (
    <ScrollView>
    <View style={{
      flex: 1,
      padding: 25,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black"
    }}>
      {directs.map((path, index) => (
        <Card
          onPress={() => path.direct && router.push(path.direct)}
          key={index}
          style={{
            width: "100%",
            minHeight: 100,
            margin: 6,
            borderRadius: 6,
            padding: 6
          }}>
            <Card.Content>
               <Title style={{
                fontSize: 25,
                fontFamily: "sans-serif",
                color: "#000"
               }}>
                {`${path.title} ${path.id}`}
               </Title>
               <Paragraph style={{
                fontSize: 15,
                fontWeight: "bold",
                fontFamily: "sans-serif",
                color: "333"
               }}>
                {path.desc}
               </Paragraph>
               
              {path.fields && (
                <View style={{
                  marginTop: 5
                }}>
                  {path.fields.map((field, index) => (
                    <Text style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#333",
                      marginLeft: 10,
                    }}
                    key={index}>
                      -{field}
                    </Text>
                  ))}
                </View>
              )}
            </Card.Content>
        </Card>
      ))}
    </View>
    </ScrollView>
  );
}

