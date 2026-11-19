export interface Student {
  studentId: string
  name: string
  program: string
  yearLevel: number
  status: 'Active' | 'Inactive' | 'On Leave'
  email: string
}

// Returns a fresh copy each call so pages can modify their own list safely.
export function useStudents(): Student[] {
  return [
    { studentId: '2024-00123', name: 'Maria Santos', program: 'BS Information Technology', yearLevel: 2, status: 'Active', email: 'maria.santos@example.edu' },
    { studentId: '2023-00456', name: 'Juan Dela Cruz', program: 'BS Computer Science', yearLevel: 3, status: 'Active', email: 'juan.delacruz@example.edu' },
    { studentId: '2022-00789', name: 'Angela Reyes', program: 'BS Information Systems', yearLevel: 4, status: 'On Leave', email: 'angela.reyes@example.edu' },
    { studentId: '2024-00987', name: 'Carlo Mendoza', program: 'BS Information Technology', yearLevel: 1, status: 'Active', email: 'carlo.mendoza@example.edu' },
    { studentId: '2021-00321', name: 'Patricia Lim', program: 'BS Computer Science', yearLevel: 4, status: 'Inactive', email: 'patricia.lim@example.edu' },
    { studentId: '2023-00654', name: 'Miguel Torres', program: 'BS Information Systems', yearLevel: 3, status: 'Active', email: 'miguel.torres@example.edu' },
  ]
}