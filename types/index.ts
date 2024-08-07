export const announcementTypes: Record<string, string> = {
  "1": "Company Mergers",
  "2": "Disposals and divestitures",
  "3": "Business Restructuring",
  "4": "Expansion Plans",
  "5": "Financial Troubles",
  "6": "Management Changes",
  "7": "Capital Structure Changes",
  "8": "Contract Awards",
  "9": "Legal Disputes",
  "10": "Payment Defaults",
  "11": "Credit Rating Changes",
  "12": "Product Launches",
  "13": "Operational Disruptions",
  "14": "Accounting Changes",
  "15": "Investments/Divestments",
  "16": "Dividend Policy Changes",
  "17": "Labor Issues",
  "18": "Investor Conferences",
  "19": "Earnings Reports",
  "20": "Delisting Actions",
  "21": "IPO Launches",
  "22": "Name Changes",
  "23": "Offer for Sale",
  "24": "US FDA Inspections",
  "25": "Earnings Calls",
  "26": "Other Situations",
};

export const types: string[] = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
];

export const sentimentTypes: string[] = ["Positive", "Neutral", "Negative"];

export interface DataItem {
  _id: { oid: string };
  attachment_name: string;
  company_id: string;
  company_name: string;
  created_at: { date: string };
  created_by: string;
  published_time: { date: string };
  sentiment: string;
  source_url: string;
  sub_type: string;
  summary: string;
  ticker: string;
  type_id: string;
  year: string;
}
