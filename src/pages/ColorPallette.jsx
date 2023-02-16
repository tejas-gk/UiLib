import React, { useState } from 'react'
const hexColors = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
]
const hslColors = [
    '0',
    '15',
    '30',
    '45',
    '60',
    '75',
    '90',
    '105',
    '120',
    '135',
    '150',
    '165',
    '180',
    '195',
    '210',
    '225',
    '240',
    '255',
    '270',
    '285',
    '300',
    '315',
    '330',
    '345',
    '360'
]
const rgbColors = [
    '0',
    '51',
    '102',
    '153',
    '204',
    '255'
]

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}


export default function ColorPallette() {
    const [color, setColor] = useState('#000000')
    const [selectedMode, setSelectedMode] = useState('hex')

    const generateRandomColor = () => {
        let color = '#'
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * hexColors.length)
            color += hexColors[randomIndex]
        }
        setColor(color)
    }
    const generateRandomHSL = () => {
        let color = 'hsl('
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * hslColors.length)
            color += hslColors[randomIndex]
            if (i < 2) {
                color += ','
            }
        }
        color += ')'
        setColor(color)
    }
    const generateRandomRGB = () => {
        let color = 'rgb('
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * rgbColors.length)
            color += rgbColors[randomIndex]
            if (i < 2) {
                color += ','
            }
        }
        color += ')'
        setColor(color)
    }
    const generateRandomColorByMode = () => {
        if (selectedMode === 'hex') {
            generateRandomColor()
        } else if (selectedMode === 'hsl') {
            generateRandomHSL()
        } else if (selectedMode === 'rgb') {
            generateRandomRGB()
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(color)
    }

    const colorShades = Array.from({ length: 10 }, (_, index) => {
        const shade = (index + 1) * 100 / 11;
        return classNames(`bg-${color}`, `darken-${shade}`, `hover:darken-${shade + 10}`);
    });
    return (
        <div className='flex flex-col items-center h-screen bg-gray-100
      '>
            <h1 className='text-6xl font-bold mt-10 underline'>Color Pallette</h1>
            <div className='flex items-center mt-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-2xl font-bold'>Mode</h1>
                    <select className='mt-2' value={selectedMode} onChange={(e) => setSelectedMode(e.target.value)}>
                        <option value='hex'>Hex</option>
                        <option value='hsl'>HSL</option>
                        <option value='rgb'>RGB</option>
                    </select>
                </div>
                <div className='flex flex-col items-center ml-10'>
                    <h1 className='text-2xl font-bold'>Color</h1>
                    {color}
                </div>
                <div
                    onClick={copyToClipboard}
                    className='ml-10 w-20 h-20 rounded-full cursor-pointer' style={{ backgroundColor: color }}></div>
            </div>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-5' onClick={generateRandomColorByMode}>Generate Random Color</button>


            <div className='grid md:grid-cols-10 gap-4 mt-10 cursor-pointer grid-cols-3
            '>
                {
                    selectedMode === 'hex' && hexColors.map((color, index) => {
                        return (
                            <div
                                onClick={() => {
                                    setColor(`#${color}${color}${color}${color}${color}${color}`)
                                }}
                                key={index} className='w-20 h-20 rounded-full' style={{ backgroundColor: `#${color}${color}${color}${color}${color}${color}` }}></div>
                        )
                    }
                    )

                }
                {colorShades.map((shade, index) => (
                    <div
                        key={index}
                        className={classNames('w-8 h-8 rounded-full', shade)}
                        onClick={() => setColor(colorShades[index])}
                    />
                ))}
                {
                    selectedMode === 'hsl' && hslColors.map((color, index) => {
                        return (
                            <div
                                onClick={() => setColor(`hsl(${color},${color},${color})`)}
                                key={index} className='w-20 h-20 rounded-full' style={{ backgroundColor: `hsl(${color},${color},${color})` }}></div>
                        )
                    }
                    )
                }
                {
                    selectedMode === 'rgb' && rgbColors.map((color, index) => {
                        return (
                            <div
                                onClick={() => setColor(`rgb(${color},${color},${color})`)}
                                key={index} className='w-20 h-20 rounded-full' style={{ backgroundColor: `rgb(${color},${color},${color})` }}></div>
                        )
                    }
                    )
                }
            </div>


        </div>
    )
}
