import React, { useEffect, useRef, useState } from 'react'

const Eyes = () => {
    const [leftRotate, setLeftRotate] = useState(0)
    const [rightRotate, setRightRotate] = useState(0)
    const [leftOffset, setLeftOffset] = useState({ x: 0, y: 0 })
    const [rightOffset, setRightOffset] = useState({ x: 0, y: 0 })

    const leftEyeRef = useRef(null)
    const rightEyeRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX
            const mouseY = e.clientY

            const updateEye = (eyeRef, setRotate, setOffset) => {
                if (!eyeRef.current) return

                const rect = eyeRef.current.getBoundingClientRect()
                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2

                const deltaX = mouseX - centerX
                const deltaY = mouseY - centerY

                const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
                setRotate(angle - 180)

                const maxOffset = 6;
                const dist = Math.sqrt(deltaX ** 2 + deltaY ** 2)
                const ratio = dist > 0 ? Math.min(maxOffset / dist, 1) : 0

                setOffset({
                    x: deltaX * ratio,
                    y: deltaY * ratio,
                })
            }

            updateEye(leftEyeRef, setLeftRotate, setLeftOffset)
            updateEye(rightEyeRef, setRightRotate, setRightOffset)
        }

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-0.7" className='relative w-full h-full bg-cover bg-center bg-[url("/Imgs/ochi-image03.webp")]'>
                <div className='absolute flex gap-8 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>

                    <div className='flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-100'>
                        <div
                            ref={leftEyeRef}
                            className='relative w-[8.3vw] h-[8.3vw] rounded-full bg-zinc-900 flex items-center justify-center'
                            style={{
                                transform: `translate(${leftOffset.x}px, ${leftOffset.y}px)`,
                                transition: 'transform 0.1s ease-out'
                            }}
                        >
                            <div
                                style={{ transform: `rotate(${leftRotate}deg)` }}
                                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5'
                            >
                                <div className='w-[1.2vw] h-[1.2vw] rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-100'>
                        <div
                            ref={rightEyeRef}
                            className='relative w-[8.3vw] h-[8.3vw] rounded-full bg-zinc-900 flex items-center justify-center'
                            style={{
                                transform: `translate(${rightOffset.x}px, ${rightOffset.y}px)`,
                                transition: 'transform 0.1s ease-out'
                            }}
                        >
                            <div
                                style={{ transform: `rotate(${rightRotate}deg)` }}
                                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5'
                            >
                                <div className='w-[1.2vw] h-[1.2vw] rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Eyes