import React from "react"
import Login from './Login'
import { render, screen } from "@testing-library/react"


describe("Login", () => {
    it("renders correctly", () => {
        render(<Login/>)
        screen.getByLabelText('Email')
        
    })
})