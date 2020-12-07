import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return(
        <>
            <img src={logoImg} alt="Github Explorer" /> 
            <Title>Explore Repositórios no Github</ Title>

            <Form action="">
                <input type="text" placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories> 
                <a href="teste">
                    <img src="https://avatars1.githubusercontent.com/u/67765103?s=460&u=4c90181cc09e3fa4ccd322f70d812d61739f360a&v=4" 
                    alt="avatar Vinicius"/>
                    <div>
                        <strong>nlw-2</strong>
                        <p>Proffy | Sua plataforma de estudos online</p>
                    </div>
                <FiChevronRight size={20}/>
                </a>
                <a href="teste">
                    <img src="https://avatars1.githubusercontent.com/u/67765103?s=460&u=4c90181cc09e3fa4ccd322f70d812d61739f360a&v=4" 
                    alt="avatar Vinicius"/>
                    <div>
                        <strong>nlw-2</strong>
                        <p>Proffy | Sua plataforma de estudos online</p>
                    </div>
                <FiChevronRight size={20}/>
                </a>
                <a href="teste">
                    <img src="https://avatars1.githubusercontent.com/u/67765103?s=460&u=4c90181cc09e3fa4ccd322f70d812d61739f360a&v=4" 
                    alt="avatar Vinicius"/>
                    <div>
                        <strong>nlw-2</strong>
                        <p>Proffy | Sua plataforma de estudos online</p>
                    </div>
                <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>    
    ); 
        
};

export default Dashboard;