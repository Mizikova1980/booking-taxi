import React from "react"
import LoginForm from './LoginForm'
import { render, screen } from "@testing-library/react"


describe("LoginForm", () => {
    it("renders correctly", () => {
        render(<LoginForm/>)
        screen.getByLabelText('Email')
        
    })
})