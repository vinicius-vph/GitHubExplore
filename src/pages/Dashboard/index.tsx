import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Paragraph, Main, Form, Repositories, Error } from './styles';

interface Repository {
    id: string;
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
    }, [repositories]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        
        if (!newRepo) {
            setInputError('Digite o autor/nome do repositório');
            return;
        }
        
        try {
            const response = await api.get<Repository>(`repos/${newRepo}`);
            const repository = response.data;
    
            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
             console.log(response.data)
        } catch (err) {
            setInputError('Erro na busca por esse repositório');
            
        }
        
    }
    // function handleRemoveRepository(event: String): void | undefined {
    //     console.log(event)

    //     return;
    // }

    return(
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</ Title>
            <Paragraph>Mantenha uma lista de repositórios favoritos que serão exibidos <br /> toda vez que você acessar essa página 
                
            </Paragraph>
            <Paragraph>Para uma melhor experiência pesquise no formato perfil/repostório</Paragraph>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                value={newRepo}
                onChange={e => setNewRepo(e.target.value)}
                placeholder="Ex. facebook/react, denoland/deno, vuejs/vue"

                />
                <button type="submit">Pesquisar</button>
            </Form>
            { inputError && <Error>{inputError}</Error>}
            <Main>
                {repositories.map(repository => (
                 
                    <Repositories key={repository.id}>
                        <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
                            <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
                            <div>
                                <strong>{repository.full_name}</strong>
                                <p>{repository.description}</p>
                            </div>

                            <FiChevronRight size={20}/>
                        </Link>
                        <FiTrash size={20} style={{color: 'red'}} onClick={() => {alert('Funcionalidade em implementação')}}/>
                    </Repositories>
                  

                ))}
            </Main>
        </>
    );

};

export default Dashboard;