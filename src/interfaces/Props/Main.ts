import { CSSProperties } from "react";
import { Dispatch, SetStateAction } from "react";
export interface OptionsProps {
   id?: string,
   name?: string,
   status?: string,
   value?: string,
   className?: string,
   handler?: Dispatch<SetStateAction<string>>
}

export interface LayoutProps {
   handler?: Dispatch<SetStateAction<string>>
   style?: CSSProperties
}

export interface MenuProps {
   handler?: Dispatch<SetStateAction<string>>
}
export interface AppProps {
   handler?: Dispatch<SetStateAction<string>>
}