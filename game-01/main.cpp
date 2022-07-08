#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_map>
#include <cmath>
#include <cstdlib>
#include <chrono>

// brute force
std::pair<int, int> solve_brute(std::vector<int> M, int N)
{
    int len = M.size();
    for (int i = 0; i < len; i++)
    {
        for (int j = 0; j < len; j++)
        {
            if (i != j and M[i] + M[j] == N)
            {
                return {M[i], M[j]};
            }
        }
    }

    return {-1, -1};
}

// brute force with reduced search space
std::pair<int, int> solve_brute_opt(std::vector<int> M, int N)
{
    int len = M.size();
    for (int i = 0; i < len - 1; i++)
    {
        for (int j = i + 1; j < len; j++)
        {
            if (M[i] + M[j] == N)
            {
                return {M[i], M[j]};
            }
        }
    }

    return {-1, -1};
}

// with sorting and reduced search
std::pair<int, int> solve_search(std::vector<int> M, int N)
{
    std::sort(M.begin(), M.end());

    int len = M.size();

    int lo = 0;
    int hi = len - 1;

    while (lo < hi)
    {
        if (M[lo] + M[hi] == N)
        {
            return {M[lo], M[hi]};
        }

        if (M[lo] + M[hi] < N)
        {
            lo++;
        }
        else
        {
            hi--;
        }
    }

    return {-1, -1};
}

// with sorting and binary search
std::pair<int, int> solve_bs(std::vector<int> M, int N)
{
    std::sort(M.begin(), M.end());

    int len = M.size();

    for (int i = 0; i < len; i++)
    {
        int target = N - M[i];

        int lo = 0;
        int hi = len - 1;

        int mid = 0;

        while (lo <= hi)
        {
            mid = (hi + lo) / 2;
            if (M[mid] < target)
            {
                lo = mid + 1;
            }
            else if (M[mid] > target)
            {
                hi = mid - 1;
            }
            else
            {
                return {M[i], M[mid]};
            }
        }
    }

    return {-1, -1};
}

// with hashing
std::pair<int, int> solve_hash(std::vector<int> M, int N)
{
    std::unordered_map<int, int> hash;

    int len = M.size();

    for (int i = 0; i < len; i++)
    {
        if (hash.find(N - M[i]) != hash.end())
        {
            return {M[hash[N - M[i]]], M[i]};
        }

        hash[M[i]] = i;
    }

    return {-1, -1};
}

// To generate random arrays
std::vector<int> generate_array(int n, int min, int max)
{
    std::vector<int> arr;
    for (int i = 0; i < n; i++)
    {
        int random = min + (rand() % max);
        arr.push_back(random);
    }

    return arr;
}

int main()
{
    srand((unsigned)time(NULL));

    int n = 100;
    int m = 50;
    std::vector<int> arr = generate_array(n, 1, 100);

    // std::pair<int, int> sol = solve_brute(arr, m);
    // std::pair<int, int> sol = solve_brute_opt(arr, m);
    // std::pair<int, int> sol = solve_search(arr, m);
    // std::pair<int, int> sol = solve_bs(arr, m);
    std::pair<int, int> sol = solve_hash(arr, m);

    if (sol.first == -1)
    {
        std::cout << "Hashing: No solution." << std::endl;
    }
    else
    {
        std::cout << "Hashing: [" << sol.first << "," << sol.second << "]" << std::endl;
    }
}