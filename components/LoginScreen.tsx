import {View, Text, TextInput, Pressable, SafeAreaView} from 'react-native';
import tw from 'twrnc';

export const LoginScreen = () => {
    return (
        <SafeAreaView style={tw``}>
            <View style={tw`p-8 w-full max-w-sm mt-32`}>
                <Text style={tw`text-3xl font-bold mb-6`}>Login</Text>

                <TextInput
                    style={tw`w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4`}
                    placeholderTextColor="#000"
                    placeholder="Enter email address"
                />

                <TextInput
                    style={tw`w-full bg-white border border-slate-200 rounded-md h-12 px-4`}
                    placeholderTextColor="#000"
                    secureTextEntry
                    placeholder="Enter password"
                />

                <View style={tw`flex flex-row justify-between items-center my-8`}>
                    <View style={tw`flex-row items-center`}>
                        <Pressable
                            style={tw`bg-white border border-slate-200 h-6 w-6 rounded-sm mr-2 flex items-center justify-center`}
                        >
                            <View style={tw`bg-green-400 w-4 h-4 rounded-sm`} />
                        </Pressable>
                        <Text style={tw``}>Remember me</Text>
                    </View>
                    <Pressable>
                        <Text style={tw`text-blue-400 font-bold`}>Reset password</Text>
                    </Pressable>
                </View>

                <Pressable
                    style={tw`h-12 bg-blue-800 rounded-md flex flex-row justify-center items-center px-6`}
                >
                    <View style={tw`flex-1 flex items-center`}>
                        <Text style={tw`text-white text-base font-medium`}>Login</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}