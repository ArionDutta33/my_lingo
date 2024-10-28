import { Stack, Link } from 'expo-router';
import { Text, TextInput, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Button } from '~/components/Button';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className="flex-row justify-around p-5">
        <Text className="font-semibold color-blue-600">English</Text>
        <FontAwesome name="exchange" size={16} color="gray" />
        <Text className="font-semibold color-blue-600">Spanish</Text>
      </View>
      <View className="border-y border-gray-300 p-3">
        <View className="i flex-row  gap-5">
          <TextInput
            placeholder="Enter your text"
            className="min-h-32 flex-1  text-lg"
            multiline={true}
            maxLength={5000}
          />
          <FontAwesome6 name="circle-arrow-right" size={24} color="royalblue" />
        </View>
        <View className="flex-row justify-between">
          <FontAwesome name="microphone" size={18} color="dimgray" />
          <Text className="text-gray-500">0/5000</Text>
        </View>
      </View>
      <View className="gap-5 bg-gray-300 p-5">
        <Text className="min-h-32   text-lg">Ouput</Text>
        <View className="flex-row justify-between">
          <FontAwesome6 name="volume-high" size={18} color="dimgray" />
          <Feather name="clipboard" size={18} color="dimgray" />
        </View>
      </View>
    </>
  );
}
