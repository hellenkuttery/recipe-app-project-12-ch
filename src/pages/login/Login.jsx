import "./Login.style"
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledForm,
  StyledImg,
  StyledInput,
  StyledButton,
} from './Login.style';

import {useNavigate} from "react-router-dom"

import meal from "../../assets/meal.svg"

const Login = () => {
  const navigate=useNavigate();
 
  const userInfo={
    username:"Ahmet"
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    // Bu şekilde ilk olarak dene. Ama eğer about da tıklarsa geri about sayfasına dğeilde ana  sayfaya döner bunun için geri gitmesini sağlayalım
    // navigate("/")
    // bunun için 
    sessionStorage.setItem("user",JSON.stringify(userInfo))
    navigate(-1)
  }
  return (
    <LoginContainer>
        <FormContainer>
          <StyledImg src={meal}/>
          <Header>
            {"<CW/>"} Recipe
          </Header>
          <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder="Enter name" type="text"/>
          <StyledInput placeholder="Enter password" type="password"/>
         <StyledButton type="submit">login</StyledButton>
         </StyledForm>
        </FormContainer>
     </LoginContainer> 
  )
}

export default Login