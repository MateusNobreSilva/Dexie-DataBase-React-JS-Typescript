import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// banco de dados
import { db } from '../../database/db';
import { useLiveQuery } from "dexie-react-hooks";

// styled
import { ContainerDiv } from './styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Home() {
  const classes = useStyles();
  const livros = useLiveQuery(
    () => db.livros.toArray()
  );

  return (
    <ContainerDiv>
      <p>Home</p>
      <p>Home</p>
      <a href='/addLivro'>
        <Button variant="contained" color="primary">
          Novo Livro
        </Button>
      </a>
      <br />

      {livros?.map(livros =>
        <Card key={livros.id} className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={livros.imagem}
              title={livros.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {livros.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {livros.descricao}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>)}
    </ContainerDiv>
  );
}

export default Home;
