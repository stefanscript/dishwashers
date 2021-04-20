export function mockFetch(status: number, response: any) {
    (fetch as any).mockReturnValue(
        Promise.resolve({
            status: status,
            json: () => Promise.resolve(response),
        })
    );
}
