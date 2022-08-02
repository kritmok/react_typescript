import React, { useRef, useState } from 'react'

interface Person{
    firstName: string;
    lastName: string;
}

interface Props{
    text: String
    ok?: boolean;
    i? : number;
    fn?: (bob: string) => string;
    person: Person;
}

interface TextNode{
    text: string
}

const TextField: React.FC<Props> = () => {
    const [count, setCount] = useState<TextNode>({text: 'hello'});

  return (
    <div>
        <input />
    </div>
  )
}

export default TextField