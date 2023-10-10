import { type Decrypter } from '@/application/contract/cryptography/decrypter'
import { type Encrypter } from '@/application/contract/cryptography/encrypter'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {}

  async encrypt (plaintext: string): Promise<string> {
    const ciphertext = jwt.sign({ }, this.secret, { subject: plaintext, expiresIn: 6000 })
    return ciphertext
  }

  async decrypt (ciphertext: string): Promise<string> {
    const plaintext: any = jwt.verify(ciphertext, this.secret)
    return plaintext
  }
}
