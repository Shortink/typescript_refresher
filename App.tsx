import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {destination, vacation_price} from "./app/vacation"
import { useState } from 'react';

const color1 = "#72A0C1";
const color2 = "#72D0D1"

export default function App() {

  const [color, setColor] = useState(color1)

  type Person = {name: string; age:number; isEmployed: boolean};
  type PersonType2 = {
    name: string;
    age: number;
    isEmployed: boolean;
    address?: Address;
    destination?: string;
    price?: number;
  };

  interface Address {
    street: string;
    city: string;
    apartment?: number;
  }

  const name: string = "John Doe Winter";
  let occupation: string = "Software Developer";
  const age: number = 30;
  const isEmployed: boolean = true;
  const hobibes: string[] = ["Reading", "Swimming", "Coding"];
  const scores: number[] = [10, 20, 30, 40, 50];
  const mixed_values: any[] = [10, "John Doe", true];

  const address: {street: string; city: string} = {
    street: "123 bumshit rd",
    city: "New York"
  }

  const person1: Person = {name:"Jane Doe", age:35, isEmployed: false}
  const person2: PersonType2 = {
    name,
    age,
    isEmployed,
    address: {street: "123 Main Street", city: "New York", apartment: 3},
    destination: destination("Hawaii"),
    price: vacation_price("LA", 7),

  }

  const people: (Person | PersonType2) [] = [person1, person2];
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
           Welcome {person2.name}
        </Text>
      </View>
      <View>
        <Text style={{ color: color}}>
           You are going to {person2.destination}, it will cost you {" "}
           {person2.price}
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => {
          setColor("teal")
          alert("I am clicked");
          console.log("I am clicked");
        }}>
          <Text>Click Me</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize: 30, fontWeight: "bold"},
  text: {fontSize: 16, margin: 10, color: "#72A0C1"}
});
