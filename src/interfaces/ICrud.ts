export interface ICrud<D, E> {
  create(data: D): Promise<E | null>
  // findById(id: string): Promise<E | null>;
  // update(id: string, data: Partial<D>): Promise<E | null>;
  // delete(id: string): Promise<boolean>;
}