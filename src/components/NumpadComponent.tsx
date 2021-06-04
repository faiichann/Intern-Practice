import { useNumpad } from '../useNumpad';
import styled ,{ css }from 'styled-components';

const Container = styled.div`
text-align: center;
`
const Card = styled.div`
box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
max-width: 360px;
margin: 10px;
padding: 5px;
text-align: center;
background-color: #333;
border-radius: 20px;
`
const Screen = styled.div`
height: 70px;
background-color: #fafcfc;
margin: 10px;
padding: 10px 10px 0 10px;
color: #2c2730;
text-align: right;
border-radius: 20px;
color: #e44c60;
font-size: 22px;
box-shadow: rgba(32, 32, 250, 0.05) 0px 4px 16px, rgba(60, 60, 253, 0.05) 0px 8px 32px;
`

const Button = styled.button`
background: #e9ccd6;
border-radius: 50%;
width: 50px;
height: 50px;
border: 3px solid palevioletred;
color: #d1263d;
font-size: 22px;
margin: 15px 10px 15px 10px;
padding: 2px;
-webkit-box-shadow: 0 0 17px 3px #db70ae,0 0 2px 2px #db70ae;
box-shadow: 0 0 10px 2px #db70ae,0 0 10px 1px #db70ae;
`
const LongButton = styled(Button)`
width: 120px;
border-radius: 50px;
`

const NumpadComponent = (() =>{

    const {handleClick, input, answer, handleAnswer, handleClear}= useNumpad();

    return (
        <Container> 
            <Card>
            <Screen>
                {input} <br/>
                {answer}
            </Screen>
            <div className="row">
            <LongButton onClick={handleClear} >Clear</LongButton>
            <Button value="%" onClick={handleClick}>%</Button>
            <Button value="/" onClick={handleClick}>/</Button>
            </div>
            <div className="row">
            <Button value="7" onClick={handleClick} >7</Button>
            <Button value="8" onClick={handleClick} >8</Button>
            <Button value="9" onClick={handleClick} >9</Button>
            <Button value="*" onClick={handleClick} >x</Button>
            </div>
            <div className="row">
            <Button value="4" onClick={handleClick} >4</Button>
            <Button value="5" onClick={handleClick} >5</Button>
            <Button value="6" onClick={handleClick} >6</Button>
            <Button value="-" onClick={handleClick} >-</Button>
            </div>
            <div className="row">
            <Button value="1" onClick={handleClick} >1</Button>
            <Button value="2" onClick={handleClick} >2</Button>
            <Button value="3" onClick={handleClick} >3</Button>
            <Button value="+" onClick={handleClick} >+</Button>
            </div>
            <div className="row">
            <LongButton value="0" onClick={handleClick} >0</LongButton>
            <Button value="." onClick={handleClick} >.</Button>
            <Button onClick={handleAnswer} > = </Button>
            </div>
            </Card>
        </Container>
)
})

export default NumpadComponent