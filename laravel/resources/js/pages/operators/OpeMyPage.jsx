import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Chat from '../chats/Chat';

function OpeMyPage() {
    const [operator, setOperator] = useState([]);

    const api_token=
    document
    .querySelector('meta[name="api-token"]')
    .getAttribute("content");

    useEffect(() => {
        getOperator()
    },[])

    const getOperator = async () => {
        console.log("URL",`/api/operator?api_token=${api_token}`)
         await axios
        .get(`/api/operator?api_token=${api_token}`)
        .then( (res) => {
                console.log("operator",res.data)
                    setOperator(res.data);
                }).catch(error => {
                     console.log('Error',error.response);
                         });
                }

    return (
        <>
        {/* <SH1>Operator My Page</SH1> */}
        <SDiv>
            <SBox>
             <dt>名前</dt>
             <dd>{operator.name}</dd>
             {/* <dt>ユーザーネーム</dt>
             <dd>{operator.nickname}</dd> */}
             <SImage
                src="https://source.unsplash.com/random"
                width= "150px"
                height ="150px"
              />
            </SBox>
      
             <S2Box>
                {/* <dt>職種</dt>
                <dd>{operator.occupation}</dd>
                <dt>性別</dt>
                <dd>{operator.gender}</dd>
                <dt>誕生日</dt>
                <dd>{operator.birthday}</dd> */}
                <dt>email</dt>
                <dd>{operator.email}</dd>
                <dt>登録日</dt>
                <dd>{operator.created_at}</dd>
             </S2Box>
             </SDiv>
    
             <Chat 
             ope_id = {operator.id}
             />

    
      </>
    )
}

const SBox = styled.div`
    background-color:#FFE3D3;
    width:20%;
    color:gray;
    box-shadow:2px 2px 4px gray;
`

const S2Box = styled.div`
    background-color:#FFF5F5;
    width:40%;
    color:gray;
    box-shadow:2px 2px 4px gray;

`

const SH1 = styled.h1`
    text-align:center;
    color: #FFE3D3;
`

const SImage = styled.img`
    border-radius:100%;
`

const SDiv = styled.div`
    margin-top:10px;
    display:flex;
    text-align:center;
    justify-content: center;
    margin-bottom:20px;
    `

export default OpeMyPage
// if (document.getElementById('opemypage')) {
//     ReactDOM.render(<OpeMyPage />, document.getElementById('opemypage'));
// }