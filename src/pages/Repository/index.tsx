import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="GitHubExplorer" />
                <Link to="/"><FiChevronLeft size={16} /> Voltar </Link>
            </Header>
            <RepositoryInfo>
                <header>
                    <img src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4" alt=""/>
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>descrição</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1890</strong>
                        <span>stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>
            <Issues>
                <Link  to={`dddddddddd`}>
                    <div>
                        <strong>uuuuuuuuu</strong>
                        <p>iiiiiiiiiiii</p>
                    </div>

                    <FiChevronRight size={20}/>
                </Link>
            </Issues>
        </>
    );
};

export default Repository;