import React, { useState } from 'react';

//  Material UI
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// banco de dados
import { db } from '../../database/db';

// styled
import { ContainerDiv } from './styles';

function AddLivro() {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [descricao, setDescricao] = useState("");
    const [pages, setPages] = useState(0);
    const [imagem, setImagem] = useState("");
    const [status, setStatus] = useState("");

    async function addFriend() {
        try {
            // Add the new friend!
            const id = await db.livros.add({
                name,
                author,
                descricao,
                pages,
                imagem,
            });

            setStatus(`Friend ${name} successfully added. Got id ${id}`);
            setName("");
            setDescricao("");
            setPages(0);
            setImagem("");
        } catch (error) {
            setStatus(`Failed to add ${name}: ${error}`);
        }
    }

    return (
        <ContainerDiv>
            <p>addLivro</p>
            <TextField
                id="standard-password-input"
                label="Nome do Livro"
                type="text"
                onChange={ev => setName(ev.target.value)}
            />
            <TextField
                id="standard-password-input"
                label="Autor do Livro"
                type="text"
                onChange={ev => setAuthor(ev.target.value)}
            />
            <TextField
                id="standard-password-input"
                label="Descrição"
                type="text"
                onChange={ev => setDescricao(ev.target.value)}
            />
            <TextField
                id="standard-password-input"
                label="Páginas"
                type="number"
                onChange={ev => setPages(Number(ev.target.value))}
            />
            <TextField
                id="standard-password-input"
                label="Imagem"
                type="text"
                onChange={ev => setImagem(ev.target.value)}
            />

            <Button variant="contained" color="primary" onClick={addFriend}>
                Adicionar
            </Button>
        </ContainerDiv>
    );
}

export default AddLivro;
