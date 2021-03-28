declare const Query: {
    getAllPeople: (_: any, { page }: any) => Promise<{
        count: any;
        next: any;
        previous: any;
        people: any;
    }>;
    getPerson: (_: any, { name }: any) => Promise<any>;
};
export default Query;
