import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/MapWindow"), {
    ssr: false
})

export default Map;