import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"






const Loading = () => {
    const [progress, setProgress] = useState(10)
 
    useEffect(() => {
      const timer = setTimeout(() => setProgress(100), 1500)
      return () => clearTimeout(timer)
    }, [])
   
    return <Progress value={progress} className="w-96" />
  }

export default Loading