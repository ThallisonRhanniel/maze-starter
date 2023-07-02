import * as React from 'react';

interface User {
    id: string
}

interface Props {
    text : string
    counter: number
    disabled: boolean
    obj: object
    obj2: {
        id: string
    }
    objet3: User
    addresses: Array<string> | string[] // Union Types
    status: "Loading" | "success" | "error"
    // Functions
    OnPress: () => void
    OnPressWithParameters: (id: string) => void
    OnPressWithReturn: (e: any) => string
    //Transofrmar Variavel em opcional
    color: "red" | "blue"
    [key: string]: any
}

export const Componente = ({addresses, counter, disabled, OnPress, text, ...rest}: Props) => {
    return (null );
}



//------------

interface User {
    id: string
}

interface NewUser {
    name: string
}

//Herança
interface SuperUsuario extends User, NewUser{}

type TypeProps = User & NewUser


export const Text = ({
    id = '1',
    name = 'Thallison'
}:SuperUsuario) => {}

export const Tex2 = ({
    id = '1'
}:TypeProps) => {}

//Usando o partial, as propriedades da interface deixam de ser obrigatorias, podendo vir como undefined
export const Text3 = ({id }:Partial<TypeProps>) => {}


//-------
//TypeoF
const useMock = {
    id: 1,
    name: "Thallison"
}

type UserTipadoDInamicamente = typeof useMock
//Pegar só alguma variavel especifica do typeof
type UserPick = Pick<typeof useMock, 'name' >
//Pegar todos exceto o que foi passado como parametro
type UserOmit = Omit<typeof useMock, 'name' >

//Adicionado mais propriedades em uma propriedade dinamicamente
//Record é basicamente um array ou tupla
type UserMelhorado = UserPick & {places: Record<string, string>}

const newUser: UserMelhorado = {
    name: "Thallison",
    places: {
        'rio': 'rio de janeiro',
        'sp': 'sao paulo'
    }
}