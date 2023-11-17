import dynamic from "next/dynamic";

const Map2 = dynamic(() => import("@/components/MapWindow2"), {
    ssr: false
})

export default Map2;