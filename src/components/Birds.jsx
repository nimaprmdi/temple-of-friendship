import Bird from "./Bird";

const Birds = () => {
    return new Array(50).fill().map((_, i) => {
        const x = (20 + Math.random() * 80) * (Math.round(Math.random()) ? -1 : 1);
        const y = 8 + Math.random() * 40;
        const z = -5 + Math.random() * 10;
        const bird = ["Stork", "Parrot"][Math.round(Math.random() * 1)];
        let speed = bird === "Stork" ? 0.05 : bird === "Flamingo" ? 0.25 : 3;
        let factor =
            bird === "Stork"
                ? 0.5 + Math.random()
                : bird === "Flamingo"
                ? 0.25 + Math.random()
                : 1 + Math.random() - 0.5;
        return (
            <Bird
                key={i}
                position={[x, y, z]}
                rotation={[0, x > 0 ? Math.PI : 0, 0]}
                speed={speed}
                factor={factor}
                url={process.env.PUBLIC_URL + `/${bird}.glb`}
            />
        );
    });
};

export default Birds;
