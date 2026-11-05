import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { createApp } from '../src/app.js';

const valid = { names: 'Anna & Tom', email: 'anna@example.com', date: '2027-06-12', language: 'both' };

describe('POST /api/inquiries', () => {
  it('accepts a valid inquiry', async () => {
    const res = await request(createApp()).post('/api/inquiries').send(valid);
    expect(res.status).toBe(201);
    expect(res.body.id).toBeTypeOf('string');
  });

  it('rejects missing fields with per-field errors', async () => {
    const res = await request(createApp()).post('/api/inquiries').send({ email: 'nope' });
    expect(res.status).toBe(400);
    expect(Object.keys(res.body.errors).sort()).toEqual(['date', 'email', 'language', 'names']);
  });
});
