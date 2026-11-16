import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';

// Firebase est simulé : les tests passent sans connexion ni identifiants.
const set = vi.fn().mockResolvedValue(undefined);
vi.mock('../src/firebase.js', () => ({
  db: { collection: () => ({ doc: () => ({ set }) }) },
  auth: {},
}));

const { app } = await import('../src/app.js');

describe('GET /health', () => {
  it('répond ok et écrit un ping dans Firestore', async () => {
    const res = await request(app).get('/health');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ ok: true });
    expect(set).toHaveBeenCalledOnce();
  });
});
