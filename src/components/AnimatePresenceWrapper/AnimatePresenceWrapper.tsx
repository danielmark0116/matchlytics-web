/** @format */

import React, {PropsWithChildren} from 'react'
import {motion} from 'framer-motion'

interface Props {}

const AnimatePresenceWrapper = ({children}: PropsWithChildren<Props>) => {
  return (
    <motion.div
      initial={{opacity: 0, height: 0, marginBottom: 0}}
      animate={{opacity: 1, height: 'auto', marginBottom: 16}}
      exit={{opacity: 0, height: 0, marginBottom: 0}}>
      {children}
    </motion.div>
  )
}

export default AnimatePresenceWrapper
