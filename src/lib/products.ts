export type Product = {
    id: string;
    slug: string;
    title: string;
    description: string;
    price: number;
    priceSol: number;
    tag: string;
    icon: string;
    whoItsFor: string;
    problemSolved: string;
    systemSnapshot: {
        inputs: string;
        rules: string;
        behavior: string;
    };
    features: string[];
    stripeLink: string;
};

export type Bundle = {
    id: string;
    title: string;
    description: string;
    originalPrice: number;
    price: number;
    priceSol: number;
    features: string[];
    stripeLink: string;
    recommended?: boolean;
};

export const products: { playbooks: Product[]; bundles: Bundle[] } = {
    playbooks: [
        {
            id: "pump-fun-playbook",
            slug: "pump-fun-memecoin-playbook",
            title: "Pump.fun Memecoin Playbook",
            description: "Systematic approach to Solana memecoin trading. Learn entry signals, position sizing, and exit strategies that actually work.",
            price: 15,
            priceSol: 0.15,
            tag: "🚀 MOST REQUESTED",
            icon: "📈",
            whoItsFor: "Traders who've already lost money on memecoins and want a systematic approach",
            problemSolved: "Random aping without strategy, FOMO entries, and holding too long",
            systemSnapshot: {
                inputs: "Volume spikes, holder distribution, dev wallet activity",
                rules: "Entry at 50% pullback, 2% position size max, 3x take profit",
                behavior: "Disciplined entries, systematic exits, emotion-free trading"
            },
            features: [
                "Entry signal checklist",
                "Position sizing calculator",
                "Exit strategy framework",
                "Risk management rules"
            ],
            stripeLink: "#",
        },
        {
            id: "airdrop-farming",
            slug: "airdrop-farming-blueprint",
            title: "Airdrop Farming Blueprint",
            description: "Step-by-step portfolio strategy to qualify for major airdrops. Stop wasting gas on activities that don't count.",
            price: 12,
            priceSol: 0.12,
            tag: "🎁 HIGH ROI",
            icon: "💰",
            whoItsFor: "DeFi users who missed major airdrops and want to position for the next wave",
            problemSolved: "Wasting gas on non-qualifying activities, missing eligibility criteria",
            systemSnapshot: {
                inputs: "Protocol selection criteria, minimum qualifying actions",
                rules: "Multi-chain diversification, activity frequency, wallet hygiene",
                behavior: "Strategic positioning across 10-15 protocols, documented activity"
            },
            features: [
                "Protocol selection matrix",
                "Minimum qualifying actions",
                "Multi-wallet strategy",
                "Activity tracking system"
            ],
            stripeLink: "#",
        },
        {
            id: "crypto-security",
            slug: "crypto-security-playbook",
            title: "Crypto Security Playbook",
            description: "Protect your assets from hacks, scams, and phishing attacks. Essential security practices every crypto user needs.",
            price: 10,
            priceSol: 0.10,
            tag: "🛡️ ESSENTIAL",
            icon: "🔒",
            whoItsFor: "Anyone who's been phished, hacked, or wants to prevent it from happening",
            problemSolved: "Losing funds to preventable attacks, poor wallet hygiene, transaction mistakes",
            systemSnapshot: {
                inputs: "Wallet setup, transaction verification, backup procedures",
                rules: "Hardware wallet for large amounts, test transactions, verify addresses",
                behavior: "Paranoid security mindset, systematic verification, zero trust"
            },
            features: [
                "Wallet hygiene checklist",
                "Transaction verification process",
                "Recovery procedures",
                "Common scam patterns"
            ],
            stripeLink: "#",
        },
        {
            id: "defi-arbitrage",
            slug: "defi-arbitrage-system",
            title: "DeFi Arbitrage System",
            description: "Cross-DEX arbitrage strategies with high win rates. Manual execution guide with automation logic included.",
            price: 20,
            priceSol: 0.20,
            tag: "⚡ ADVANCED",
            icon: "🔄",
            whoItsFor: "Experienced traders ready to exploit price inefficiencies across DEXs",
            problemSolved: "Missing arbitrage opportunities, slow execution, high gas costs eating profits",
            systemSnapshot: {
                inputs: "Price feeds from multiple DEXs, gas price monitoring, liquidity depth",
                rules: "Minimum 2% spread after gas, execute within 12 seconds, max 5 ETH per trade",
                behavior: "Systematic scanning, rapid execution, profit-taking discipline"
            },
            features: [
                "DEX comparison framework",
                "Gas optimization strategies",
                "Execution timing guide",
                "Automation logic (Python)"
            ],
            stripeLink: "#",
        },
        {
            id: "yield-optimization",
            slug: "yield-optimization-framework",
            title: "Yield Optimization Framework",
            description: "Maximize DeFi yields while managing risk. Portfolio rotation strategies for changing market conditions.",
            price: 18,
            priceSol: 0.18,
            tag: "🏦 ADVANCED",
            icon: "📊",
            whoItsFor: "DeFi users with capital deployed who want better risk-adjusted returns",
            problemSolved: "Chasing high APYs into risky protocols, poor diversification, rug pulls",
            systemSnapshot: {
                inputs: "Protocol TVL, audit status, token emissions, impermanent loss risk",
                rules: "Max 20% in any single protocol, rotate based on risk/reward, monthly rebalancing",
                behavior: "Systematic protocol evaluation, disciplined rotation, risk-first mindset"
            },
            features: [
                "Protocol evaluation matrix",
                "Risk scoring system",
                "Rotation triggers",
                "IL calculator"
            ],
            stripeLink: "#",
        }
    ],
    bundles: [
        {
            id: "starter-pack",
            title: "Txchyon Starter Access",
            description: "Choose any 3 playbooks and save 20%",
            originalPrice: 45,
            price: 29,
            priceSol: 0.29,
            features: [
                "Any 3 playbooks of your choice",
                "Immediate download access",
                "Lifetime updates",
                "Email support"
            ],
            stripeLink: "#",
        },
        {
            id: "operator-pack",
            title: "Txchyon Operator Pack",
            description: "Complete access to all playbooks and systems",
            originalPrice: 95,
            price: 59,
            priceSol: 0.59,
            features: [
                "All 5 playbooks included",
                "Future playbooks (free)",
                "Priority email support"
            ],
            stripeLink: "#",
            recommended: true
        }
    ]
};

export const solWallet = "6j1JUMN8qHBtbZxkauLtPJx8V1J9xPiyK2d9RjwVLn8M";
export const shopEmail = "shop@txchyon.com";
