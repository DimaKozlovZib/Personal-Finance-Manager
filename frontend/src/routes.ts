enum paths {
  HOME = '',
  TRANSACTIONS = 'Transactions'
}

const NavigatePath = (path: string): string => `/${path}`

export {paths, NavigatePath}