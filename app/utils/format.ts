export function formattedValues(
  value: number | null | undefined,
  locale: string = 'tr-TR',
  fraction: number = 2
): string {
  if (value === null || value === undefined || isNaN(value)) {
    return '0,00'
  }

  return value.toLocaleString(locale, {
    minimumFractionDigits: fraction,
    maximumFractionDigits: fraction
  })
}
