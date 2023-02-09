import { Request, Response } from 'express';

// Model
import { MovielModel } from '../models/Movie';

// logger
import logger from '../../config/logger';

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovielModel.create(data);
    return res.status(201).json(movie);
  } catch (e: any) {
    logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: 'Por favor, tente mais tarde' });
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovielModel.findById(id);
    console.log('teste');

    if (!movie) {
      return res.status(404).json({ error: 'O filme não existe' });
    }

    return res.status(200).json(movie);
  } catch (e: any) {
    logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: 'Por favor, tente mais tarde' });
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovielModel.find();
    return res.status(200).json(movies);
  } catch (e: any) {
    logger.error(`Erro no sistem: ${e.message}`);
    return res.status(500).json({ error: 'Por favor, tente mais tarde' });
  }
}

export async function removeMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovielModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: 'O filme não existe' });
    }

    await movie.delete();

    return res.status(200).json({ msg: 'Filme removido com sucesso' });
  } catch (e: any) {
    logger.error(`Erro no sistem: ${e.message}`);
    return res.status(500).json({ error: 'Por favor, tente mais tarde' });
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;

    const movie = await MovielModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: 'O filme não existe' });
    }

    await MovielModel.updateOne({ _id: id }, data);

    return res.status(200).json(data);
  } catch (e: any) {
    logger.error(`Erro no sistem: ${e.message}`);
    return res.status(500).json({ error: 'Por favor, tente mais tarde' });
  }
}
