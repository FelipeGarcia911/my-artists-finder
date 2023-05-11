import React, { useEffect, useState, useRef } from 'react'

import { faTimes } from '@fortawesome/free-solid-svg-icons'

import useAPI from '@/hooks/useAPI'

import { GenreType } from '@/types/types'

import * as S from './styles'

interface SearchBarProps {
  onOptionSelected?(option?: GenreType): void
  handleOnClose?(): void
}

const EMPTY_RESULT: GenreType = {
  name: 'No genre found',
  id: -1,
  parent_id: -1,
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { onOptionSelected, handleOnClose } = props

  const [value, setValue] = useState('')
  const [option, setOption] = useState<GenreType>()
  const [options, setOptions] = useState<GenreType[]>()
  const [showOptions, setShowOptions] = useState(false)

  const inputRef = useRef(null)

  const { searchGenre } = useAPI()

  const handleOnSearch = async (query: string) => {
    const response = await searchGenre(query)
    const isValid = response && response.length > 0
    if (isValid) {
      setOptions(response)
    } else {
      setOptions([EMPTY_RESULT])
    }
    setShowOptions(true)
  }

  const onValueChange = (query: string) => {
    const isValid = query && query.length >= 3 && query !== option?.name
    if (isValid) handleOnSearch(query)
    else setShowOptions(false)
  }

  const handleOnChange = (event: any) => {
    const newValue = event.target.value
    if (newValue !== value) setValue(newValue)
  }

  const onClearSearch = () => {
    if (typeof handleOnClose === 'function') handleOnClose()
    setShowOptions(false)
    setOptions([])
    setValue('')
  }

  const handleOnOptionSelected = (option?: GenreType) => {
    onOptionSelected && onOptionSelected(option)
    setValue(option?.name || '')
    setShowOptions(false)
  }

  useEffect(() => {
    setValue('')
    inputRef?.current?.focus()
  }, [])

  useEffect(() => {
    onValueChange(value)
  }, [value])

  useEffect(() => {
    handleOnOptionSelected(option)
  }, [option])

  const handleOnOptionClick = (option: GenreType) => {
    setOption(option)
  }

  return (
    <S.Container>
      <S.Input
        onChange={handleOnChange}
        value={value}
        ref={inputRef}
        placeholder="Search a music genre"
      />
      <S.Icon icon={faTimes} onClick={onClearSearch} size="2x" />
      {showOptions ? (
        <S.OptionsContainer>
          {options?.map((item, idx) => {
            const { id } = item
            const isValid = id !== -1

            return (
              <S.OptionLabel
                key={`OptionLabel-${idx}`}
                onClick={() => (isValid ? handleOnOptionClick(item) : null)}
                valid={isValid}
              >
                {item.name}
              </S.OptionLabel>
            )
          })}
        </S.OptionsContainer>
      ) : null}
    </S.Container>
  )
}

export default SearchBar
