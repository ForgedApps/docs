import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/tech-radar/docs',
  source: docs.toFumadocsSource(),
});
