import { Stack, Link } from 'expo-router';
import { Pressable, Text, TextInput, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Button } from '~/components/Button';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import { supabase } from '~/utils/supabase';
export default function Home() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const translate = async (text: string) => {
    const { data, error } = await supabase.functions.invoke('translate', {
      body: JSON.stringify({ name: 'Arion' }),
    });
    console.log(data);
    console.log(error);

    return 'translation';
  };

  const onTranslate = async () => {
    const translation = await translate(input);
    setOutput(translation);
  };
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
            value={input}
            onChangeText={(val) => setInput(val)}
            placeholder="Enter your text"
            className="min-h-32 flex-1  text-lg"
            multiline={true}
            maxLength={5000}
          />
          <Pressable onPress={onTranslate}>
            <FontAwesome6 name="circle-arrow-right" size={24} color="royalblue" />
          </Pressable>
        </View>
        <View className="flex-row justify-between">
          <FontAwesome name="microphone" size={18} color="dimgray" />
          <Text className="text-gray-500">{input.length}/5000</Text>
        </View>
      </View>
      {output && (
        <View className="gap-5 bg-gray-200 p-5">
          <Text className="min-h-32   text-lg">{output}</Text>
          <View className="flex-row justify-between">
            <FontAwesome6 name="volume-high" size={18} color="dimgray" />
            <Feather name="clipboard" size={18} color="dimgray" />
          </View>
        </View>
      )}
    </>
  );
}
