import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";

const MyComponent = () => {
  const tailwind = useTailwind();

  return <Text style={tailwind("text-blue-600")}>Hello world</Text>;
};

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <MyComponent />
    </TailwindProvider>
  );
}
