interface text {
    text: string;
}

function thicktext({ text }: text) {
    return (
        <h1 className="text-white text-2xl font-bold text-center p-10">
            {text}
        </h1>
    );
}


export default thicktext;

