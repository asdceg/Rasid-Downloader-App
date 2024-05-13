export declare class AppService {
    getHello(): string;
    takePointsScreenshots(points: string[], url: string, token: string, sector_id: number, site_id: number, floor_id: number, folder_name: string): Promise<string>;
    takeQrCardsScreenshots(points: string[], url: string, token: string, folder_name: string): Promise<string>;
    takeStaffCardsScreenshots(points: string[], url: string, token: string, folder_name: string): Promise<string>;
    takeScreenshots(points: string[], url: string, token: string, endpoint: string, folder_name: string, folder_type: string): Promise<string>;
}