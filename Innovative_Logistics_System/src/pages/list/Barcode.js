import JsBarcode from 'jsbarcode'
import { useEffect, useState } from 'react'

const BarcodeItemScreen = ({barcodeNumber}) => {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    const canvas = document.createElement('canvas')
    JsBarcode(canvas, barcodeNumber, { height: 45, displayValue: false })
    setImageUrl(canvas.toDataURL('image/png'))
  }, [])

  return <img  src={imageUrl} />
}

export default BarcodeItemScreen