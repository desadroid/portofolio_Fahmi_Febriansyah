<?php
/**
 * PortfolioModel.php
 * Model — Handles all data reading and writing to/from data.json
 */
class PortfolioModel
{
    private string $dataPath;

    public function __construct()
    {
        // data.json stays at root of project
        $this->dataPath = dirname(__DIR__, 2) . '/data.json';
    }

    /**
     * Read all portfolio data from JSON file.
     * Returns a decoded associative array, or a default structure if file is missing.
     */
    public function getData(): array
    {
        if (!file_exists($this->dataPath)) {
            return $this->defaultData();
        }

        $raw = file_get_contents($this->dataPath);
        $data = json_decode($raw, true);

        return (!empty($data) && is_array($data)) ? $data : $this->defaultData();
    }

    /**
     * Persist data array back to the JSON file.
     */
    public function saveData(array $data): bool
    {
        return file_put_contents(
            $this->dataPath,
            json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)
        ) !== false;
    }

    /**
     * Fallback default portfolio data structure.
     */
    private function defaultData(): array
    {
        return [
            "hero" => [
                "photo_url"   => "foto_profil.jpg",
                "status"      => "Available for Projects & Collaboration",
                "title_1"     => "Hi, I am ",
                "name"        => "Fahmi Febriansyah",
                "title_2"     => "Software Engineer & IT Consultant",
                "description" => "I specialize in building interactive web applications with a solid and reliable backend integration foundation."
            ],
            "about" => [
                "title"            => "Background",
                "name"             => "Fahmi Febriansyah",
                "job_title"        => "Software Engineer & IT Consultant",
                "biography_title"  => "Result-oriented Software Engineer",
                "biography_p1"     => "I am a result-oriented Software Engineer and IT Consultant with a proven track record of designing, building, and deploying scalable digital solutions. With a strong foundation in system logic and infrastructure architecture, I specialize in transforming complex business requirements into high-performing web applications.",
                "biography_p2"     => "As an independent IT Consultant at Desadroid, I have successfully led the development of end-to-end projects, ranging from custom e-commerce platforms to integrated management systems. My expertise spans full-stack development, database optimization, and web hosting management. I am passionate about clean structure, deep-dive troubleshooting, and continuous learning.",
                "stats"            => [
                    ["num" => "100%", "label" => "Problem Solving"],
                    ["num" => "A+",  "label" => "Team Management"]
                ],
                "socials" => [
                    "github"    => "https://github.com/Fahmi-febriansyah?tab=repositories",
                    "linkedin"  => "https://www.linkedin.com/in/fahmifebriansyah/",
                    "instagram" => ""
                ]
            ],
            "skills" => [
                [
                    "category" => "Web Development",
                    "icon"     => "code",
                    "tags"     => ["HTML5 & CSS3", "JavaScript", "Tailwind CSS", "Responsive Design"]
                ],
                [
                    "category" => "Backend Fundamentals",
                    "icon"     => "database",
                    "tags"     => ["PHP & Laravel", "Node.js & Express", "MySQL"]
                ],
                [
                    "category" => "Management & Soft Skills",
                    "icon"     => "info",
                    "tags"     => ["Problem Solving", "Communication", "Project Management", "Teamwork"]
                ]
            ],
            "education" => [
                [
                    "year"        => "2022 - 2026 (Expected)",
                    "degree"      => "Bachelor of Informatics Engineering",
                    "institution" => "Universitas Indraprasta PGRI (Unindra)",
                    "description" => "Studying software engineering, algorithms, and full-stack web application development."
                ],
                [
                    "year"        => "2020 - 2023",
                    "degree"      => "Vocational High School - Software Engineering",
                    "institution" => "SMK Bina Mandiri Multimedia Cileungsi",
                    "description" => "Foundation in programming logic and dynamic web programming (PHP & MySQL)."
                ]
            ]
        ];
    }
}
