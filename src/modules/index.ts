import { PDF_PATH, PDF_ROUTER } from './pdf.module'
import { WORD_PATH, WORD_ROUTER } from './word.module'
import { IMAGE_PATH, IMAGE_ROUTER } from './png.module'

export const MODULES_LIST = [                   // Add all modules here
  { PATH: PDF_PATH, ROUTER: PDF_ROUTER },       // POST is available for GET,PUT,POST,DELETE
  { PATH: WORD_PATH, ROUTER: WORD_ROUTER },     // POST is available for GET,PUT,POST,DELETE
  { PATH: IMAGE_PATH, ROUTER: IMAGE_ROUTER },   // POST is available for GET,PUT,POST,DELETE
]
