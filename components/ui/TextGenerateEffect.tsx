'use client'
import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { cn } from '@/lib/utils'

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  const [scope, animate] = useAnimate()
  let wordsArray = words.split(' ')

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        backgroundPosition: '200%',
      },
      {
        duration: 2.5,
        delay: stagger(0.2),
        ease: 'linear',
        repeat: Infinity,
      }
    )
  }, [scope.current])

  const renderWords = () => {
    return (
      <motion.div
        ref={scope}
        className='bg-gradient-to-r from-[#008baa] via-[#7e42a7] via-[#6600c5] via-[#2a46ff] via-[#0099ff] to-[#008ead] bg-clip-text text-transparent animate-gradient'
      >
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${
                idx > 3 ? 'text-purple' : 'dark:text-white text-black'
              } opacity-0`}
            >
              {word}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn('font-bold', className)}>
      <div className='my-4'>
        <div className='dark:text-white text-black leading-snug tracking-wide'>
          {renderWords()}
        </div>
      </div>
    </div>
  )
}

// Tailwind animation utility
;<style jsx>{`
  @keyframes animate-gradient {
    to {
      background-position: 200%;
    }
  }
`}</style>
