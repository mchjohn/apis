const express = require('express')

const app = express()

const PORT = process.env.PORT || 8877

app.get('/', (req, res) => {
  res.json({
    msg: 'rota inicial'
  })
})

app.get('/players', (req, res) => {
  res.json({
    "players": [
      {
        "id": "1",
        "url": "https://res.cloudinary.com/sk84all/image/upload/v1614455846/quilombos/player-soccer_kiwnwu.png",
        "name": "Lucas Naldinos",
        "played": 4,
        "age": 10,
        "gols": 3,
        "position": "Atacante"
      },
      {
        "id": "2",
        "url": "https://res.cloudinary.com/sk84all/image/upload/v1614455846/quilombos/player-soccer_kiwnwu.png",
        "name": "Daniel Gomes",
        "played": 4,
        "age": 10,
        "gols": 3,
        "position": "Goleiro"
      },
      {
        "id": "3",
        "url": "https://res.cloudinary.com/sk84all/image/upload/v1614455846/quilombos/player-soccer_kiwnwu.png",
        "name": "Alan Lopes",
        "played": 4,
        "age": 10,
        "gols": 3,
        "position": "Atacante"
      },
      {
        "id": "4",
        "url": "https://res.cloudinary.com/sk84all/image/upload/v1614455846/quilombos/player-soccer_kiwnwu.png",
        "name": "João Naldino",
        "played": 4,
        "age": 10,
        "gols": 3,
        "position": "Zagueiro"
      },
      {
        "id": "5",
        "url": "https://res.cloudinary.com/sk84all/image/upload/v1614455846/quilombos/player-soccer_kiwnwu.png",
        "name": "Natan Vaz",
        "played": 4,
        "age": 10,
        "gols": 3,
        "position": "Zagueiro"
      },
      {
        "id": "6",
        "url": "https://res.cloudinary.com/sk84all/image/upload/v1614455846/quilombos/player-soccer_kiwnwu.png",
        "name": "Marcos Oliveira",
        "played": 4,
        "age": 10,
        "gols": 3,
        "position": "Meio Campo"
      },
      {
        "id": "7",
        "url": "https://res.cloudinary.com/sk84all/image/upload/v1614455846/quilombos/player-soccer_kiwnwu.png",
        "name": "Donald Jr",
        "played": 4,
        "age": 10,
        "gols": 3,
        "position": "Meio Campo"
      },
      {
        "id": "8",
        "url": "https://res.cloudinary.com/sk84all/image/upload/v1614455846/quilombos/player-soccer_kiwnwu.png",
        "name": "Murilo Junior",
        "played": 4,
        "age": 10,
        "gols": 3,
        "position": "Zagueiro"
      },
      {
        "id": "9",
        "url": "https://res.cloudinary.com/sk84all/image/upload/v1614455846/quilombos/player-soccer_kiwnwu.png",
        "name": "Victor Gomes",
        "played": 4,
        "age": 10,
        "gols": 3,
        "position": "Goleiro"
      },
      {
        "id": "10",
        "url": "https://res.cloudinary.com/sk84all/image/upload/v1614455846/quilombos/player-soccer_kiwnwu.png",
        "name": "Neto Silva",
        "played": 4,
        "age": 10,
        "gols": 3,
        "position": "Lateral"
      }
    ]
  })
})

app.get('/news', (req, res) => {
  res.json({
    "news": [
      {
        "id": "1",
        "avatarUrl": "https://res.cloudinary.com/sk84all/image/upload/v1614442049/quilombos/home-news_retfrd.jpg",
        "category": "Partida",
        "title": "Partida contra o time do Grão Pará em casa",
        "date": "18/02/2021"
      },
      {
        "id": "2",
        "avatarUrl": "https://res.cloudinary.com/sk84all/image/upload/v1614442049/quilombos/home-news_retfrd.jpg",
        "category": "Jogo",
        "title": "Partida contra o time do Grão Pará em casa",
        "date": "18/02/2021"
      },
      {
        "id": "3",
        "avatarUrl": "https://res.cloudinary.com/sk84all/image/upload/v1614442049/quilombos/home-news_retfrd.jpg",
        "category": "Novidade",
        "title": "Partida contra o time do Grão Pará em casa",
        "date": "18/02/2021"
      },
      {
        "id": "4",
        "avatarUrl": "https://res.cloudinary.com/sk84all/image/upload/v1614442049/quilombos/home-news_retfrd.jpg",
        "category": "Partida",
        "title": "Partida contra o time do Grão Pará em casa",
        "date": "18/02/2021"
      },
      {
        "id": "5",
        "avatarUrl": "https://res.cloudinary.com/sk84all/image/upload/v1614442049/quilombos/home-news_retfrd.jpg",
        "category": "Treino",
        "title": "Partida contra o time do Grão Pará em casa",
        "date": "18/02/2021"
      },
      {
        "id": "6",
        "avatarUrl": "https://res.cloudinary.com/sk84all/image/upload/v1614442049/quilombos/home-news_retfrd.jpg",
        "category": "Comunicado",
        "title": "Partida contra o time do Grão Pará em casa",
        "date": "18/02/2021"
      },
      {
        "id": "7",
        "avatarUrl": "https://res.cloudinary.com/sk84all/image/upload/v1614442049/quilombos/home-news_retfrd.jpg",
        "category": "Partida",
        "title": "Partida contra o time do Grão Pará em casa",
        "date": "18/02/2021"
      },
      {
        "id": "8",
        "avatarUrl": "https://res.cloudinary.com/sk84all/image/upload/v1614442049/quilombos/home-news_retfrd.jpg",
        "category": "Infrmação",
        "title": "Partida contra o time do Grão Pará em casa",
        "date": "18/02/2021"
      },
      {
        "id": "9",
        "avatarUrl": "https://res.cloudinary.com/sk84all/image/upload/v1614442049/quilombos/home-news_retfrd.jpg",
        "category": "Partida",
        "title": "Partida contra o time do Grão Pará em casa",
        "date": "18/02/2021"
      },
      {
        "id": "10",
        "avatarUrl": "https://res.cloudinary.com/sk84all/image/upload/v1614442049/quilombos/home-news_retfrd.jpg",
        "category": "Treino",
        "title": "Partida contra o time do Grão Pará em casa",
        "date": "18/02/2021"
      }
    ]
  })
})

app.get('/games', (req, res) => {
  res.json({
    "games": [
      {
        "id": "1",
        "urlTeam1": "https://res.cloudinary.com/sk84all/image/upload/v1614454405/quilombos/league-logo-64x64_zo2toy.png",
        "urlTeam2": "https://res.cloudinary.com/sk84all/image/upload/v1614447872/quilombos/football-badge_afmhjs.png",
        "team1": "Quilombos",
        "team2": "Grão Pará",
        "goalsTeam1": "2",
        "goalsTeam2": "1",
        "date": "18/02/2021"
      },
      {
        "id": "2",
        "urlTeam1": "https://res.cloudinary.com/sk84all/image/upload/v1614454405/quilombos/league-logo-64x64_zo2toy.png",
        "urlTeam2": "https://res.cloudinary.com/sk84all/image/upload/v1614447872/quilombos/football-badge_afmhjs.png",
        "team1": "Quilombos",
        "team2": "Grão Pará",
        "goalsTeam1": "2",
        "goalsTeam2": "1",
        "date": "18/02/2021"
      },
      {
        "id": "3",
        "urlTeam1": "https://res.cloudinary.com/sk84all/image/upload/v1614454405/quilombos/league-logo-64x64_zo2toy.png",
        "urlTeam2": "https://res.cloudinary.com/sk84all/image/upload/v1614447872/quilombos/football-badge_afmhjs.png",
        "team1": "Quilombos",
        "team2": "Grão Pará",
        "goalsTeam1": "2",
        "goalsTeam2": "1",
        "date": "18/02/2021"
      },
      {
        "id": "4",
        "urlTeam1": "https://res.cloudinary.com/sk84all/image/upload/v1614454405/quilombos/league-logo-64x64_zo2toy.png",
        "urlTeam2": "https://res.cloudinary.com/sk84all/image/upload/v1614447872/quilombos/football-badge_afmhjs.png",
        "team1": "Quilombos",
        "team2": "Grão Pará",
        "goalsTeam1": "2",
        "goalsTeam2": "1",
        "date": "18/02/2021"
      },
      {
        "id": "5",
        "urlTeam1": "https://res.cloudinary.com/sk84all/image/upload/v1614454405/quilombos/league-logo-64x64_zo2toy.png",
        "urlTeam2": "https://res.cloudinary.com/sk84all/image/upload/v1614447872/quilombos/football-badge_afmhjs.png",
        "team1": "Quilombos",
        "team2": "Grão Pará",
        "goalsTeam1": "2",
        "goalsTeam2": "1",
        "date": "18/02/2021"
      },
      {
        "id": "6",
        "urlTeam1": "https://res.cloudinary.com/sk84all/image/upload/v1614454405/quilombos/league-logo-64x64_zo2toy.png",
        "urlTeam2": "https://res.cloudinary.com/sk84all/image/upload/v1614447872/quilombos/football-badge_afmhjs.png",
        "team1": "Quilombos",
        "team2": "Grão Pará",
        "goalsTeam1": "2",
        "goalsTeam2": "1",
        "date": "18/02/2021"
      },
      {
        "id": "7",
        "urlTeam1": "https://res.cloudinary.com/sk84all/image/upload/v1614454405/quilombos/league-logo-64x64_zo2toy.png",
        "urlTeam2": "https://res.cloudinary.com/sk84all/image/upload/v1614447872/quilombos/football-badge_afmhjs.png",
        "team1": "Quilombos",
        "team2": "Grão Pará",
        "goalsTeam1": "2",
        "goalsTeam2": "1",
        "date": "18/02/2021"
      },
      {
        "id": "8",
        "urlTeam1": "https://res.cloudinary.com/sk84all/image/upload/v1614454405/quilombos/league-logo-64x64_zo2toy.png",
        "urlTeam2": "https://res.cloudinary.com/sk84all/image/upload/v1614447872/quilombos/football-badge_afmhjs.png",
        "team1": "Quilombos",
        "team2": "Grão Pará",
        "goalsTeam1": "2",
        "goalsTeam2": "1",
        "date": "18/02/2021"
      },
      {
        "id": "9",
        "urlTeam1": "https://res.cloudinary.com/sk84all/image/upload/v1614454405/quilombos/league-logo-64x64_zo2toy.png",
        "urlTeam2": "https://res.cloudinary.com/sk84all/image/upload/v1614447872/quilombos/football-badge_afmhjs.png",
        "team1": "Quilombos",
        "team2": "Grão Pará",
        "goalsTeam1": "2",
        "goalsTeam2": "1",
        "date": "18/02/2021"
      },
      {
        "id": "10",
        "urlTeam1": "https://res.cloudinary.com/sk84all/image/upload/v1614454405/quilombos/league-logo-64x64_zo2toy.png",
        "urlTeam2": "https://res.cloudinary.com/sk84all/image/upload/v1614447872/quilombos/football-badge_afmhjs.png",
        "team1": "Quilombos",
        "team2": "Grão Pará",
        "goalsTeam1": "2",
        "goalsTeam2": "1",
        "date": "18/02/2021"
      }
    ]
  })
})

app.listen(PORT, () => console.log('Servidor rodando na porta ' + PORT))