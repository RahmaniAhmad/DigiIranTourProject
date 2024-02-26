export interface IBaseRepository<T> {
  getAll(
    filter?: string,
    page?: number,
    limit?: number
  ): Promise<{ data: T[]; rowsCount: number }>;
  getById(id: number): Promise<T | null>;
  create(data: Record<string, unknown>): Promise<{ message: string; data: T }>;
  update(
    id: number,
    data: Record<string, unknown>
  ): Promise<{ message: string; data: T }>;
  delete(id: number): Promise<{ message: string; data: T }>;
}
