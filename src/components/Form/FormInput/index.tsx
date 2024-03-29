import React, { forwardRef, InputHTMLAttributes, KeyboardEvent } from 'react'
import { useImperativeHandle } from 'react'
import { ReactNode } from 'react'
import { useCallback } from 'react'
import { useRef } from 'react'
import { ChangeEvent, MutableRefObject } from 'react'
import Styled, { TextAlign } from './index.style'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: MutableRefObject<HTMLInputElement | null>
  type?: 'number' | 'password' | 'text'
  max?: number
  maxLength?: number
  textAlign?: TextAlign
  numberOnly?: boolean
  backgroundColor?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

type FormInputHandle = {
  value: () => string
}

export type FormInputElementRef = React.ElementRef<typeof FormInput>

const FormInput = forwardRef<FormInputHandle, FormInputProps>(
  (
    {
      maxLength,
      max,
      type = 'text',
      textAlign = 'center',
      numberOnly = true,
      onChange = () => {},
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    const onKeyPress = useCallback(
      (event: KeyboardEvent<HTMLInputElement>) => {
        const typedNumber = +event.key
        if (numberOnly && isNaN(typedNumber)) {
          event.preventDefault()
        }

        if (!maxLength) {
          return
        }

        if (maxLength <= event.currentTarget.value.length) {
          event.preventDefault()
        }

        if (max) {
          if (max < +event.currentTarget.value * 10 + typedNumber) {
            event.preventDefault()
          }
        }
      },
      [numberOnly, maxLength, max]
    )

    useImperativeHandle(ref, () => ({
      value() {
        return inputRef.current?.value ?? ''
      },
    }))

    return (
      <Styled.Input
        type={type}
        textAlign={textAlign}
        ref={inputRef}
        onChange={onChange}
        onKeyPress={onKeyPress}
        {...rest}
      />
    )
  }
)

const FormInputBox = ({ children }: { children: ReactNode }) => (
  <Styled.InputBox>{children}</Styled.InputBox>
)

const InputDividerText = ({
  color,
  children,
}: {
  color: 'black' | 'green'
  children: ReactNode
}) => <Styled.InputDivider color={color}>{children}</Styled.InputDivider>

export { FormInputBox, InputDividerText }

export default FormInput
