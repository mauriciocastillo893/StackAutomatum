export const stateMapOneExpression = [
    {
        key: "S",
        rule: "string"
    },
    {
        key: "AP",
        rule: /[a-z]+/
    },
    {
        key: "AS",
        rule: /[A-Z]+/
    }
]

export const stateMapDoubleExpression = {
    "EX": [
        {
            key: "EX",
            chomskyExpression: ["S", "NVS"],
            error: "Expected family form [S NVS]",
        },
        {
            key: "NVS",
            chomskyExpression: ["AP", "NVSS"],
            error: "Expected family form [AP NVSS]",
        },
        {
            key: "NVS",
            chomskyExpression: ["AS", "NVSS"],
            error: "Expected family form [AS NVSS]",
        },
        {
            key: "NVSS",
            chomskyExpression: ["AP", "NVSS"],
            error: "Expected family form [AP NVSS]",
        },
        {
            key: "NVSS",
            chomskyExpression: ["AS", "NVSS"],
            error: "Expected family form [AS NVSS]",
        },
    ],
}