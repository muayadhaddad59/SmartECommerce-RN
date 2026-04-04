import { StyleSheet, KeyboardTypeOptions } from 'react-native'
import React from 'react'
import {
    Control,
    Controller,
    FieldValues,
    Path,
    RegisterOptions,
} from 'react-hook-form'
import AppTextInput from '@/components/inputs/AppTextInput'
import { AppColor } from '@/styles/colors'
import { s, vs } from 'react-native-size-matters'

interface AppTextInputControllerProps<T extends FieldValues> {
    control: Control<T>
    name: Path<T>
    rules?: RegisterOptions<T, Path<T>>
    placeholder: string
    secureTextEntry?: boolean
    keyboardType?: KeyboardTypeOptions
}

export default function AppTextInputController<T extends FieldValues>({
                                                                          control,
                                                                          name,
                                                                          rules,
                                                                          placeholder,
                                                                          keyboardType = 'default',
                                                                          secureTextEntry = false,
                                                                      }: AppTextInputControllerProps<T>) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({
                         field: { onChange, value, onBlur },
                         fieldState: { error },
                     }) => (
                <AppTextInput
                    value={value ? String(value) : ''}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    style={error ? styles.errorInput : undefined}
                    error={error?.message}
                />
            )}
        />
    )
}

const styles = StyleSheet.create({
    errorInput: {
        borderColor: AppColor.redColor,
    },
    textError: {
        color: AppColor.redColor,
        fontSize: s(12),
        textAlign: 'center',
        marginBottom: vs(10),
        marginTop: -vs(5),
    },
})